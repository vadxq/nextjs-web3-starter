import { SkeletonCard } from '@/ui/skeletonCard';
export default function Loading() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Loading...</h1>

      <div>
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  );
}
