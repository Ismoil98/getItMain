import Card from '../card';

const Index = () => {

    return (
        <section className='container mt-4'>
            <div className='flex justify-between gap-4 flex-wrap mb-[86px]'>
                <Card crs='/sites_1.png' />
                <Card crs='/sites_2.png' />
                <Card crs='/sites_3.png' />
                <Card crs='/sites_4.png' />
                <Card crs='/sites_5.png' />
                <Card crs='/sites_6.png' />
                <Card crs='/sites_7.png' />
                <Card crs='/sites_8.png' />
            </div>
            <button className='w-full bg-white p-[15px] border border-lines rounded'>
                Показать все
            </button>
        </section>
    );
}

export default Index;
