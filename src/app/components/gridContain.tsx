import NovelCard from '@/app/components/card'

export default function GridContain() {
  return (
<div className="p-4">
  <h3 className="text-xl font-semibold mb-4 md:text-left ">New Series</h3>

  <div className="grid grid-auto-flow:row grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 place-items-center justify-center">

<NovelCard/>
<NovelCard/>
<NovelCard/>
<NovelCard/>
<NovelCard/>
<NovelCard/>





  </div>
</div>



  );
}
/**
  

*/