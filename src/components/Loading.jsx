import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ArticleSkeleton = () => (
    <div className="space-y-4 p-4 ">
        <div className='mx-auto w-1/3'>
            <Skeleton baseColor="#DCFCE7"
                height={24} />
        </div>
        <div className='flex flex-row gap-2 justify-around'>
            <div className='rounded-2xl'>
                <Skeleton baseColor="#DCFCE7" height={240} width={240} />
            </div>
            <div className='rounded-2xl'>
                <Skeleton baseColor="#DCFCE7" height={240} width={240} />
            </div>
            <div className='rounded-2xl'>
                <Skeleton baseColor="#DCFCE7" height={240} width={240} />
            </div>
            <div className='rounded-2xl'>
                <Skeleton baseColor="#DCFCE7" height={240} width={240} />
            </div>
        </div>
    </div>
);


export default ArticleSkeleton