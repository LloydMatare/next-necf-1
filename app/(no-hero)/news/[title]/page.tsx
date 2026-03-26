'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import BackButton from '@/components/backButton';
import Image from 'next/image';
import RegisterDialog from '@/components/RegisterDialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, ExternalLink } from 'lucide-react';

const NewsDetail: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const searchParams = useSearchParams();
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // Retrieve query parameters
    const image = searchParams.get('image');
    const description = searchParams.get('description');
    const content = searchParams.get('content');
    const author = searchParams.get('author');
    const date = searchParams.get('date');
    const register = searchParams.get('register');

    const decodedTitle = useMemo(() => (title ? decodeURIComponent(String(title)) : ''), [title]);

    useEffect(() => {
        if (register === '1') setIsRegisterOpen(true);
    }, [register]);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-3">
                <BackButton />
                <Button asChild variant="outline" className="rounded-xl">
                    <Link href="/news">
                        All news
                        <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                    </Link>
                </Button>
            </div>

            {decodedTitle ? (
                <article className="overflow-hidden rounded-3xl bg-background/70 ring-1 ring-border/60 backdrop-blur">
                    <div className="relative">
                        <div className="relative aspect-[16/8] w-full bg-black/10">
                            {image ? (
                                <Image
                                    src={image}
                                    alt={decodedTitle}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority
                                />
                            ) : null}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                            {date ? (
                                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/80">
                                    <CalendarDays className="h-4 w-4" />
                                    {date}
                                </p>
                            ) : null}
                            <h1 className="mt-3 text-balance font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                                {decodedTitle}
                            </h1>
                            {author ? (
                                <p className="mt-3 text-sm text-white/75">{author}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid gap-8 p-6 md:grid-cols-12 md:p-10">
                        <div className="space-y-5 md:col-span-8">
                            {content ? (
                                <p className="text-sm leading-relaxed text-foreground md:text-base">
                                    {content}
                                </p>
                            ) : null}
                            {description ? (
                                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {description}
                                </p>
                            ) : null}
                        </div>

                        <aside className="space-y-4 md:col-span-4">
                            <div className="rounded-2xl bg-background/60 p-5 ring-1 ring-border/60">
                                <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                                    EVENT
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    If this update relates to an upcoming event, you can register here.
                                </p>
                                <Button
                                    type="button"
                                    className="mt-4 w-full rounded-xl bg-emerald-700 hover:bg-emerald-600"
                                    onClick={() => setIsRegisterOpen(true)}
                                >
                                    Register
                                </Button>
                            </div>
                        </aside>
                    </div>
                </article>
            ) : (
                <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                    <h1 className="text-2xl font-semibold text-foreground">
                        Article Not Found
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        This news item is missing a title.
                    </p>
                </div>
            )}

            <RegisterDialog
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                eventTitle={decodedTitle || "Event"}
            />
        </div>
    );
};

export default NewsDetail;
