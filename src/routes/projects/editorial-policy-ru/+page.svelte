<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Редполитика</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1} useInline={false}>
    Редполитика
    <svelte:fragment slot="subtitles">
      <Link classes="regular-weight regular-size large-line-height" href="{base}/projects/editorial-policy-en" outside={false}>Редполитика для английского</Link>
    </svelte:fragment>
  </Heading>
  <p class="grid-col17">{typographString("Живой набор стилистических рекоммендаций, которыми я пользуюсь в большинстве случаев. Для спорных случаев есть здравый смысл.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>{typographString("Говорить и писать на одном языке за раз")}</Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>Она отправила SMS</p>
      <p>Оставьте ваш email и мы напишем</p>
      <p>В этом апдейте мы пофиксили дарк мод</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>Она отправила смс</p>
      <p>{typographString("Оставьте вашу электропочту и мы напишем")}</p>
      <p>{typographString("В этом обновлении мы исправили ошибки в тёмной теме")}</p>
    </div>
  </figure>
  <p class="grid-col17">{typographString("Известные исключения: технические тексты, этот сайт, и реп.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>Писать без висяков</Heading>
  <p class="grid-col17">{typographString("Предлоги, союзы, и частицы меньше четырёх букв отбиваются неразрывным пробелом от следующего слова.")}</p>
  <p class="grid-col17">{typographString("Известные исключения: теснота.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>
    {typographString("Всегда писать букву ё")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>Тeмные дни</p>
      <p>Чeрная дыра</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("Тёмные дни")}</p>
      <p>{typographString("Чёрная дыра")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>{typographString("Использовать Всемирное координированное время для часовых поясов")}</Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>15:30 по москве</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("18:30 по всемирному времени")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>
    {typographString("Не использовать римские числа")} 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>{typographString("Люди в XIX веке говорили: 'Среда заела'")}</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("Люди в 19-ом веке говорили: 'Среда заела'")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>{typographString("Использовать многоточие только для численных отрезков и разрывов в цитатах")}</Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>2010-2012</p>
      <p>Продолжение следует...</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("2010...2012")}</p>
      <p>{typographString("Продолжение следует")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>
    {typographString("Числа до 10 писать словами")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11...</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("Ноль, один, два, три, четыре, пять, шесть, семь, восемь, девять, 10, 11...")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>
    {typographString("Писать дни недели и месяцы с маленькой буквы")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>Она улетает во Вторник</p>
      <p>Опубликовано 30 Октября 2023</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString("Она улетает во вторник")}</p>
      <p>{typographString("Опубликовано 30 октября 2023")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2} useInline={false}>
    {typographString("Знаки валют и процента идут после числа и отбиваются неразрывным пробелом-волоском")} 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Плохо</p>
      <p>$100</p>
      <p>9.99$</p>
      <p>25%</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Хорошо</p>
      <p>{typographString('$100')}</p>
      <p>{typographString('9.99$')}</p>
      <p>{typographString('25%')}</p>
    </div>
  </figure>
</section>