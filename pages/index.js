import FeaturedProperties from "@/features/Home/components/FeaturedProperties/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

export default function Home({featuredproperties}){
  return<DefaultLayout>
    <HeroBanner/>
    <FeaturedProperties featuredproperties={featuredproperties}/>
    </DefaultLayout>
  ;
}

export async function getStaticProps(){
  const {hits}=require("@/features/data/properties");
  return{
    props:{featuredproperties:hits}
  }
}
