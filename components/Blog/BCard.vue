<template>
    <section id="BlogCard" class="my-10">
        <div class="grid container mx-auto md:grid-cols-3 gap-6">

            <div class="max-w-lg mx-auto" v-for="blog in blogData" :key="blog">
                <div class="   shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <NuxtLink :to="blog.readMore">
                        <img class="rounded-t-lg" :src="blog.image" alt="...">
                    </NuxtLink>
                    <div class="p-5">
                        <NuxtLink :to="blog.readMore">
                            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ blog.heading }}</h5>
                        </NuxtLink>
                        <p class="font-normal text-gray-700 mb-3">{{ blog.content }}</p>
                        <NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" :to="blog.readMore">
                            Read more
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            blogData: [
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
                {
                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                    heading: 'Noteworthy technology acquisitions 2021',
                    content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                    readMore: '/'

                },
            ]
        }
    },
}

</script>