import React from "react";

const Card = ({username="default set", post="SDE-I", link="https://t3.ftcdn.net/jpg/07/17/33/40/360_F_717334058_zZu41aMmrR0CvBxI3WLbWRjrqFyLAdW1.jpg"})=>{
    return(
    <>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={link} alt="hi " width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque voluptate perspiciatis nisi eaque rem voluptas, at quia optio iusto dolorem non est, in ea. Vitae at aliquid ex dolor!
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username};
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </>
    )
}

export default Card ;