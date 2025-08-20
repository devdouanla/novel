import   NovelMiniCard from '@/app/components/novelMiniCard'

export default function GridContain1() {
  return (
<div className="p-4">
  <h3 className="text-xl font-semibold mb-4 md:text-left ">New Series</h3>

  <div className="grid grid-auto-flow:row grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-2 justify-center">
  
 <NovelMiniCard/>
  <NovelMiniCard/>
   <NovelMiniCard/>
    
 <NovelMiniCard/>
  <NovelMiniCard/>
   <NovelMiniCard/>
    
 <NovelMiniCard/>
  <NovelMiniCard/>
   <NovelMiniCard/>
      
 <NovelMiniCard/>
  <NovelMiniCard/>
   <NovelMiniCard/>
   




  </div>
</div>



  );
}
/**
  <NovelCard />
    <NovelCard />
    <NovelCard />
    <NovelCard />
    <NovelCard />
    <NovelCard />


*/