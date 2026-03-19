/**
 * ArticleBody — Main article column for the news show page.
 *
 * Renders the lead description paragraph, the full HTML article content
 * (with prose typography), and the author card footer.
 */
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import React from 'react';

export interface ArticleBodyProps {
    /** Article HTML content with injected heading IDs */
    contentWithIds: string;
    /** Short description used as the article lead */
    description: string;
    author: string;
    onShare: () => void;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({
    contentWithIds,
    description,
    author,
    onShare,
}) => (
    <motion.article
        className="lg:col-span-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
    >
        {/* Lead paragraph */}
        {/* <p className="mb-8 text-lg font-medium leading-relaxed text-gray-700 lg:text-xl">
            {description}
        </p> */}

        {/* Article prose content */}
        <div
            className="prose prose-base max-w-none prose-headings:scroll-mt-24 prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-[1.8] prose-p:text-gray-800 prose-a:font-semibold prose-a:text-[#27ae60] prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:border-l-4 prose-blockquote:border-[#2ECC71] prose-blockquote:bg-emerald-50/60 prose-blockquote:py-2 prose-blockquote:font-medium prose-blockquote:text-gray-700 prose-blockquote:not-italic prose-figure:my-8 prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-gray-400 prose-strong:font-bold prose-strong:text-gray-900 prose-code:rounded prose-code:bg-emerald-50 prose-code:px-1 prose-code:py-0.5 prose-code:text-[#27ae60] prose-ol:text-gray-800 prose-ul:text-gray-800 prose-li:leading-relaxed prose-img:mx-auto prose-img:rounded-2xl prose-img:shadow-lg prose-hr:border-gray-100 [&_li]:!text-gray-800 [&_p]:!text-gray-800 [&_span]:!text-gray-800"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />

        {/* Author card */}
        <footer className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            <div className="p-6">
                <div className="flex items-center gap-4">
                    <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-black text-white"
                        style={{
                            background:
                                'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)',
                        }}
                    >
                        {author.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-black text-gray-900">
                            {author}
                        </p>
                        <p className="text-xs text-gray-500">
                            Penulis &mdash; MI NU 02 Situwangi
                        </p>
                    </div>
                    {/* <button
                        onClick={onShare}
                        className="hidden shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:flex"
                        style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                    >
                        <Share2 className="h-4 w-4" />
                        Bagikan
                    </button> */}
                </div>
            </div>
        </footer>
    </motion.article>
);

export default ArticleBody;
