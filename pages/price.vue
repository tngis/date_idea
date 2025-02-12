<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { key: 'word', title: 'Сэтгэлийн үг' },
  { key: 'reasons', title: 'Чамд хайртай шалтгаан' },
  { key: 'promises', title: 'Чамд өгөх амлалтууд' },
]

const carouselItems = [
  {
    id: 1,
    title: 'Мэдээж чиний өхөөрдөм инээмсгэлэл',
    images: ['/IMG_4980.jpg'],
  },
  {
    id: 2,
    title: 'Чиний өрөвч сайхан сэтгэл',
    images: ['/IMG_4981.jpg', '/IMG_4983.jpg'],
  },
  {
    id: 3,
    title: 'Хичээнгүй зан чанар',
    images: ['/IMG_4986.jpg', '/IMG_4987.jpg'],
  },
  {
    id: 4,
    title: 'Хамт байхад тухтай бас хөгжилтэй',
    images: ['/IMG_4989.jpg', '/IMG_4990.jpg', '/IMG_4992.jpg'],
  },
  {
    id: 5,
    title: 'Халуухан амьтан шүүдээ',
    images: ['/IMG_4999.jpg', '/IMG_4998.jpg', '/IMG_4997.jpg', '/IMG_4995.jpg'],
  },
  {
    id: 6,
    title: 'Хамгийн сайхан нь',
    images: ['/IMG_4996.jpg'],
  },
]

const selected = ref('word')
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden p-4">
    <div class="mb-4 flex items-center gap-4 overflow-y-auto whitespace-nowrap">
      <Button v-for="item in options" :key="item.key" @click="selected = item.key" :variant="item.key === selected ? 'default' : 'outline'">
        {{ item.title }}
      </Button>
    </div>

    <div v-if="selected === 'word'">
      <div class="mb-2 text-lg">Би чамдаа хязгааргүй их хайртай.</div>
      <div>
        Үүнийг уншиж байгаа өдрийн мэндийг хүргэе. Би чамаагаа хэмжээлшгүй их гомдоосноо мэднээ. Би уучлагдах ч эрхгүй байх. Гэхдээ л бүх зүйлд чин сэтгэлээсээ
        уучлалт гуйж байна. Муухай үг хэлсэндээ муухай зан гаргасандаа бүгдэд нь. Мөрийтэй тоглоомноос болж миний зан ааш эвдэрж байсаныг ухаарсаан. Чамд минь
        ямар ч буруу байхгүй. Би л чамд муухай аашилан, хангалттай аргадаж өгж ч чадахгүй явсаар чи минь хүйтэн хатуу болчихсон байх. Би одооноос чамайгаа
        хамгийн сайнаараа хайрлаж өгөхийг хүсэж байна. Чи минь ч бас намайгаа ойлгож миний гэмшсэн сэтгэлийг хүлээж аваасай гэж хүсэж байна. Хайртай шүү🩷<br />
        2025.02.12
      </div>
    </div>

    <div v-if="selected === 'promises'">
      <div class="mb-2 text-lg">Чамд өгөх амлалтууд</div>
      <div>
        1. Муухай үг хэлэхгүй<br />
        2. Хатуу хандахгүй<br />
        3. Сайн аргадаж өгнө<br />
        4. Гадуур хонохгүй (зөвшөөрөл олгоогүй бол)<br />
        5. Вэйп татахгүй
      </div>
    </div>

    <div v-if="selected === 'reasons'" class="size-full overflow-y-auto pb-10">
      <Carousel class="relative">
        <CarouselContent>
          <CarouselItem v-for="item in carouselItems" :key="item.id">
            <div class="p-1">
              <Card>
                <CardContent class="flex h-full w-full">
                  <div class="flex flex-col gap-4">
                    <div class="w-fit rounded-lg bg-black/10 px-4 py-1 text-lg text-primary/80">{{ item.id }}/6</div>
                    <span class="text-4xl font-semibold">{{ item.title }}</span>
                    <div v-for="image in item.images" :key="image" class="overflow-hidden rounded-xl">
                      <img :src="image" alt="" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>
