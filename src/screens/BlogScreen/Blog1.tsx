'use client';
import BlogBgImage from "@/assets/images/BlogBgImage.webp";

export default function Blog1(){
    return(
        <section 
      style={{ backgroundImage: `url(${BlogBgImage.src})` }}
            className="w-full  bg-cover bg-center bg-no-repeat"

        >
            
        </section>
    )
}