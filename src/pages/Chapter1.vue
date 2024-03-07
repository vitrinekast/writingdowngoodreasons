<script setup>
import Page from "@/components/Page.vue";
import Frame from "@/components/Frame.vue";
</script>

<template>
    <main>
        <Page>
            <Frame type="fit" mask="frame_2/frame_mask.svg" outline="frame_2/frame_outline.svg">
                <img class="f-s-snow__text" src="@assets/frame_2/frame_text.svg">
                <div class="f-s-snow__snow-wrapper">
                    <img class="f-s-snow__snow" src="@assets/frame_2/frame_snow.png" alt="">
                </div>
                <img class="f-s-snow__person" src="@assets/frame_2/frame_person.png" alt="">
                <img class="frame__background" src="@assets/frame_2/frame_background.png" alt="">
            </Frame>
        </Page>

        <Page>
            <h2>I've always found great</h2>
            <Frame size="sm">
                <img class="frame__asset" src="@assets/frame_3/asset--trimmed.png" alt="">
            </Frame>
            <h2>comfort in the cold</h2>
        </Page>

        <Page type="fit">
            <div class="frame">
                <img class="frame__asset" src="@assets/frame_4/asset--trimmed.png" alt="">
            </div>
        </Page>


        <section class="page--spread">
            <Page>
                <div class="grid">
                    <Frame class="cell cell--w-3" mask="frame_5a/frame-2--mask.svg"
                        outline="frame_5a/frame-2--traced.svg">
                        <img src="@assets/frame_5a/frame-1--asset.png" alt="" class="frame__asset">
                    </Frame>

                    <Frame class="cell cell--w-3" type="filled" mask="frame_5a/frame-2--mask.svg"
                        outline="frame_5a/frame-2--traced.svg">
                        <p class="frame__text">The cold feels safe. It's melancholic and calm.</p>
                    </Frame>

                    <Frame class="cell cell--w-4" type="filled" mask="frame_5a/frame-3--mask.svg"
                        outline="frame_5a/frame-3--traced.svg">
                        <p class="frame__text">The snow crunches shoftly. Under your boots, besides that it's quiet.
                            Sounds
                            are
                            muffled under the blanket of snow, a frozen whisper in the stillness.</p>
                    </Frame>

                    <Frame class="cell cell--w-2" mask="frame_5a/frame-4--mask.svg"
                        outline="frame_5a/frame-4--traced.svg">
                        <img src="@assets/frame_5a/frame-4--asset.png" alt="" class="frame__asset">
                    </Frame>

                    <Frame class="cell cell--w-3" mask="frame_5a/frame-5--mask.svg"
                        outline="frame_5a/frame-5--traced.svg">
                        <img src="@assets/frame_5a/frame-5--asset.png" alt="" class="frame__asset">f
                    </Frame>

                    <Frame class="cell cell--w-3" mask="frame_5a/frame-6--mask.svg"
                        outline="frame_5a/frame-6--traced.svg">
                        <img src="@assets/frame_5a/frame-6--asset.png" alt="" class="frame__asset">
                    </Frame>


                </div>
            </Page>

            <Page>
                <div class="grid">
                    <Frame class="cell--w-6" mask='frame_5b/frame-1--mask.svg' outline="frame_5b/frame-1--frame.svg">
                        <img src="@assets/frame_5b/frame-1--asset.png" alt="" class="frame__asset">
                    </Frame>
                    <Frame class=" cell--w-3 " mask='frame_5b/frame-2--mask.svg' outline="frame_5b/frame-2--frame.svg">
                        <img src="@assets/frame_5b/frame-2--asset.png" alt="" class="frame__asset">
                    </Frame>
                    <Frame class=" cell--w-3 f-bird-away " mask='frame_5b/frame-3--mask.svg'
                        outline="frame_5b/frame-3--frame.svg">
                        <img src="@assets/frame_5b/frame-3--asset.png" alt="" class="frame__asset">
                    </Frame>

                    <Frame class="cell cell--w-4 " mask='frame_5b/frame-4--mask.svg' type="filled"
                        outline="frame_5b/frame-4--frame.svg">
                        <p class="frame__text">it gives me a glass like clarity that I only experience when the air is
                            crisp. The hush of a snow covered landscape creates a comforting sense of tranquility and
                            isolation</p>
                    </Frame>

                    <Frame class=" cell--w-2 " mask='frame_5b/frame-5--mask.svg' outline="frame_5b/frame-5--frame.svg">
                        <img src="@assets/frame_5b/frame-5--asset.png" alt="" class="frame__asset">
                    </Frame>

                </div>
            </Page>
        </section>
    </main>
</template>

<style scoped></style>
