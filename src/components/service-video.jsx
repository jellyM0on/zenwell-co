export default function ServiceVideo(){
    <script>
    document.getElementById('vid').play();
    </script>

    return(
        <section className='pt-[15vh] bg-[#f9f6e7] relative z-[-999] h-[75vh]'>
             <video id='vid' className='w-[100vw] h-[100%] object-cover fixed top-0' loop='true' muted='true' autoplay='autoplay' > 
                <source src='/src/assets/main-video.mp4' type='video/mp4'/>
            </video>
        </section>
    )
}