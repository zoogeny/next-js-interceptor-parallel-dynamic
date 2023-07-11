"use client";

import { MouseEventHandler, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function PhotoModal({
  params: { slug: summarySlug },
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (onDismiss) onDismiss();
    },
    [onDismiss]
  );

  return (
    <div className="border-solid border-2 border-red-500" onClick={onClick}>
      Summary summary/[slug]: {summarySlug}
    </div>
  );
}
