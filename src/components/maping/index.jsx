import Card from '../card';

const Index = () => {

    return (
        <section className='container mt-4'>
            <div className='flex justify-between gap-4 flex-wrap mb-[86px]'>
                <Card crs='/site_1.png' />
                <Card crs='/site_2.png' />
                <Card crs='/site_3.png' />
                <Card crs='/site_4.png' />
                <Card crs='/site_5.png' />
                <Card crs='/site_6.png' />
                <Card crs='/site_7.png' />
                <Card crs='/site_8.png' />
            </div>
            <button className='w-full bg-white p-[15px] border border-lines rounded'>
                Показать все
            </button>
        </section>
    );
}

export default Index;
