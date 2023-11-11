
import img1 from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
    return (
        <div className='relative'>

            <img className='h-[572px]' src={img1} alt="" />

            <div className='absolute top-[145px] text-center left-56 h-72 w-[800px] bg-white rounded-sm'>
                
                    <h1 className='font-normal text-4xl mt-14'>Bistro Boss</h1><br />
                    <p className='mx-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;