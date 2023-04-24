import './Navbar.css'
import Navbar from './Navbar'

function Faq(){
    const s1={textAlign: 'center',backgroundColor: 'white', position: 'relative', top: '0px'}
    const s2={textAlign: 'center',fontweight: '700'}
    const s3={position: 'relative', marginTop: '130px', marginLeft: '10px',  padding:'500 20px 200px 10px'}
  const s4={position: 'relative',marginRight: '20px', padding: '300 10px 0 20px'}
  const s5={float: 'Right',marginBottom: '0cm'}
  return(
<div style={{height:'850px'}}>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>FAQ'S</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="icon" type="text/css" href="icon.png"></link>

<Navbar></Navbar>
    <div className="jumbotron jumbotron" style={s1}>
        <h1 style={s2}>Frequently Asked Questions</h1>
    </div>
    <div style={{marginTop:'-150px'}}>
    <div style={s3}>
        <div className="box" style={{float: 'Left'}}>
            <p className="heading"> General Questions </p>
            <div className="faqs">
                <details>
                    <summary> what is blood cancer </summary><br />
                    <p className="text" style={{color:'black'}}>'Blood cancer' is the umbrella term used for a variety of malignant diseases of the
                        blood-forming (hematopoietic) system. A distinction is made between two kinds, depending on how
                        they originated: leukemias and lymphomas. Leukemias begin in the bone marrow, whereas lymphomas
                        start in the lymphatic system. </p>
                </details>
                <details>
                    <summary> Are Blood Cancer Curable? </summary><br />
                    <p className="text" style={{color:'black'}}>Are blood cancers curable?
                        Treatment will depend on the type of blood cancer you have, your age, how fast the cancer is
                        progressing, and whether the cancer has spread to other parts of your body. Because treatments
                        for blood cancer have vastly improved over the last several decades, many types of blood cancers
                        are now highly treatable.
                    </p>
                </details>
                <details>
                    <summary> Can cancer be genetic? </summary><br />
                    <p className="text" style={{color:'black'}}>Cancer is a genetic disease—that is, cancer is caused by certain changes to genes
                        that control the way our cells function, especially how they grow and divide.12
                    </p>
                </details>
                <details>
                    <summary> What is bone marrow?</summary><br />
                    <p className="text" style={{color:'black'}}>Bone marrow is a spongy substance found in the center of the bones. It manufactures
                        bone marrow stem cells and other substances, which in turn produce blood cells</p>
                </details>
                <details>
                    <summary>What is bone marrow donation used for?</summary><br />
                    <p className="text" style={{color:'black'}}>Bone marrow transplant has been used successfully to treat diseases such as
                        leukemias, lymphomas, aplastic anemia, immune deficiency disorders, and some solid tumor cancers
                        since 1968.
                    </p>
                </details>
                <details>
                    <summary> Does Bone Marrow grow back?</summary><br />
                    <p className="text" style={{color:'black'}}>Acoording to a research , after donation, bone marrow replaces itself within four to
                        six weeks. </p>
                </details>
            </div>
        </div>
    </div >
    <div style={s4}>
        <div className="box" style={s5}>
            <p className="heading"> Patients Question  </p>
            <div className="faqs">
                <details>
                    <summary> What disqualifies you from donating marrow?</summary><br />
                    <p className="text" style={{color:'black'}}>
                        Chronic neck, back, hip, or spine pain
                        Common back problems such as sprains, strains and aches may not interfere with a bone marrow
                        donation. However, you are not able to join if you have on-going, chronic, significant pain
                        areas of the neck, back, hip, or spine that: Interferes with your daily activities AND. </p>
                </details>
                <details>
                    <summary> Does donating bone marrow shorten your life? </summary><br />
                    <p className="text" style={{color:'black'}}>The amount of marrow donated will not weaken your own body or immune system. The
                        average amount of marrow and blood donated is about one quart, less if the patient is a baby or
                        child.

                    </p>
                </details>
                <details>
                    <summary> How do you help hospitals through this website? </summary><br />
                    <p className="text" style={{color:'black'}}>Hospital can register and login in our website and we will provide the matching bone
                        marrows if exist directlt to the hospitals if they are in need
                    </p>
                </details>
                <details>
                    <summary> How can you donate?</summary><br />
                    <p className="text" style={{color:'black'}}>In our website after registering after login through the websiter now you can now donate in two ways one by going to near by labd and donate and another way by ordering swab kits and courier the results</p>
                </details>
                <details>
                    <summary>How does be the match swab work?</summary><br />
                    <p className="text" style={{color:'black'}}>When people join the Be The Match Registry, they provide a sample of their DNA by swabbing their cheek. This cheek swab is tested for a minimum of 6 basic HLA markers. ... If a member is asked to donate, that means they are the closest HLA match to the patient – the best donor.
                    </p>
                </details>
                <details>
                    <summary>What is the most common complication of transplantation?</summary><br />
                    <p className="text" style={{color:'black'}}>Bacterial infections are the most common. Viral, fungal and other infections can also occur. Some infections can develop later on, weeks to months after the transplant. Infections can cause extended hospital stay, prevent or delay engraftment, cause organ damage, and may be life threatening. </p>
                </details>
            </div>
        </div><br />
    </div>
    </div>
    </div>   
    )}
export default Faq;