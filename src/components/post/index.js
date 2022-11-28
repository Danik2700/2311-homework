import ava from '../../assets/avatar_default.png'
import skeleton from '../../assets/skeleton-rect.png'
import thread from '../../assets/thread1.png'
function Post() {
    return (
<div class="container">
                    <img src={ava} alt="..." />
                    <div className="content">
                  <div class="col">
                    <p>
                      <b>Author name</b> <small class="text-muted">in</small>
                      <b>Topics name</b> <small class="text-muted">7th July</small>
                    </p>
                  
              
                <div class="h-25 row"><h1 id="title">7 Practical CSS Tips</h1></div>
                
                    
                  <p>
                    You not only learn more Python by implementing what you
                    already know but, in the end, you can see how all your hard
                    work pays off.
                  </p>
                
                  <p>
                    <button class="button_js">JavaScript</button>
                    
                      <small class="text-muted">12 min read   </small>
                      <small class="text-muted">Selected for you</small>
                    </p>
                    <div class="col">
                      <div class="skels">
                    <img src={skeleton} className="skeleton" alt="..." />
                    <img src={skeleton} className="skeleton" alt="..." />
                    <img src={skeleton} className="skeleton" alt="..." />
                    </div>
                    </div>
                    </div>
                        <img src={thread} className="image"   alt="..." />
                        </div>
                        </div>
    );
}
export default Post;