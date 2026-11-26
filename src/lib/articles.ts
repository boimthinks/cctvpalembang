/**
 * Penyaring status artikel.
 *
 * Semua halaman yang menampilkan artikel WAJIB memakai helper ini, supaya
 * artikel berstatus draft tidak ikut dibangun dan tidak ikut terdeploy.
 *
 * Aturannya sederhana:
 *   - draft: true  -> tidak dibangun sama sekali (404 di dev dan di hosting,
 *                     tidak masuk sitemap, tidak muncul di beranda)
 *   - draft: false -> dibangun, apa pun tanggal publishDate-nya
 *
 * Tanggal TIDAK dipakai untuk menyaring. Tanggal hanya label yang tampil di
 * halaman. Kapan sebuah artikel benar-benar tayang sepenuhnya ditentukan oleh
 * kapan Anda mengubah draft menjadi false lewat `terbit.py` lalu deploy.
 *
 * Mekanisme ini sama dengan interiorbatam, interiorbaturaja, lincahtravel,
 * dan sriwijayagrafika.com yang sudah teruji.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'blog'>;

/** Ambil artikel yang layak tayang (bukan draft). */
export async function getPublishedArticles(): Promise<Article[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

/** True bila artikel boleh dibangun menjadi halaman. */
export function bolehTampil(post: Article): boolean {
  return !post.data.draft;
}
