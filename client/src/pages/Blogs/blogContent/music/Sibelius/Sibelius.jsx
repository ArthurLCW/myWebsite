import React from "react";
import Comment from "../../../../../components/Comment/CommentInput";
import "./Sibelius.scss"

const Sibelius = () => {
  return (
    <div>
      <h1>Sibelius: Violin Concerto in D Minor</h1>

      <div className="youtube">
        <iframe id="myiframe" className="frame_video" src="https://www.youtube.com/embed/R0xpXJrbtNk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div className="comments">
        <p><i>This page aims at practicing embedding YouTube video.</i></p>
        <br/>
        <h2 style={{color: "grey"}}>第一乐章：</h2>
        <p>
          白雪皑皑的北地荒原上，寒风时而呢喃，时而叹息，时而啜泣，时而咆哮。
          旅人穿行其中，挣扎又迷茫。第一乐章在一声焦躁愤怒的低吼中结束。
        </p>
        <br/>
        <h2 style={{color: "lightblue"}}>第二乐章：</h2>
        <p>
          饱经风雪冰霜的旅人在长途跋涉后总算找到了落脚之处。
          几杯伏特加下肚，阔别已久的暖意渐渐涌向全身。在忧虑与疲倦中旅人缓缓入睡。
        </p>
        <br/>
        <h2 style={{color: "darkred"}}>第三乐章：</h2>
        <p>
          本以为天亮后旅人可以飞奔向他的目的地，但是厚厚的积雪却阻挡着他的脚步。
          尽管华丽奔放，但我觉得相比于<a href="https://www.youtube.com/watch?v=0B7t1Qai42I">贝多芬的胜利凯歌</a>
          和<a href="https://www.youtube.com/watch?v=Otj7tTKAFIM">门e的欢快舞曲</a>，
          西小协的最终章依然没有改变全曲的阴郁基调。
          但是这样的最终章才更符合现实。True ending从来都未必是happy ending，
          有些人、有些事注定求之而不得。
          黑夜之终焉或许仍是黑夜，寒冬的尽头可能还是寒冬。
          但漫漫长夜亦不可掩盖星海的璀璨，凛凛寒冬终不能抹煞雪花的洁白。
          结果或许糟糕，但是过程中美好辉煌的瞬间让然不应该被忘记。
        </p>
      </div>

      <Comment/>

    </div>
  )
}

export default Sibelius