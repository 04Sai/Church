import React from 'react'

const LiveReplay = () => {
  return (
    <div>
      <section className="section" id="watch-live">
        <article>
            <div className="container has-text-ce">
                <p className="title is-1 has-text-info center">
                    Live Replay
                </p>
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0" nonce="tGcFu6uH"></script>
                <div className="fb-video" data-href="https://www.facebook.com/bocmemories/videos/1682006555574648/"
                    data-width="700" data-show-text="false">
                    <blockquote cite="https://www.facebook.com/bocmemories/videos/1682006555574648/"
                        className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/bocmemories/videos/1682006555574648/"></a>
                        <p>BOC- Marian procession</p>Posted by <a href="https://www.facebook.com/bocmemories">BOC
                            memories</a> on Tuesday, May 30, 2023
                    </blockquote>
                </div>
            </div>
        </article>
      </section>
    </div>
  )
}

export default LiveReplay
