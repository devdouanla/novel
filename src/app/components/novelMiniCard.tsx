import Image from 'next/image';

export default function NovelMiniCard() {
  return (
   <div className="flex items-start space-x-3 p-3 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-900 w-fit">
      <Image
        src="/novels/first.png"        
        alt="I Ruined the Long Ao Tian Script"
        width={90}
        height={90}
        className="rounded-md object-cover"
      />

      <div className="flex flex-col">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
          I Ruined the Long Ao Tian Script Lorem ipsum dolor sit amet
        </h3>

        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-0.5 rounded w-fit mb-1">
          OnGoing
        </span>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          3 hours ago
        </span>
      </div>
    </div>

  );
}
