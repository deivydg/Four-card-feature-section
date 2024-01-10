<style>
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap');
</style>

function Targets(){
    return(
        <>
            <div className="card-container">

                <div className="team-builder color-target-text">
                    <div className="color-bar1"></div>
                    <h2>Team Builder</h2>
                    <p>Scans our talent network to create the <br/> optimal team for your proyect</p>
                    <img src="/src/assets/icon-team-builder.svg" alt="" className="img-team-builder"/>
                </div>

                <div className="karma color-target-text">
                    <div className="color-bar1 color-karma"></div>
                    <h2>Karma</h2>
                    <p>Regulary evaluates our talent to ensure  quality</p>
                    <img src="/src/assets/icon-karma.svg" alt="" className="img-karma"/>
                </div>

                <div className="calculator color-target-text">
                    <div className="color-bar1 color-calculator "></div>
                    <h2>Calculator</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <img src="/src/assets/icon-calculator.svg" alt="" className="img-calculator"/>
                </div>

                <div className="supervisor color-target-text">
                    <div className="color-bar1 color-supervisor"></div>
                    <h2>Supervisor</h2>
                    <p>Monitors activity to identify project <br/> roadblocks</p>
                    <img src="/src/assets/icon-supervisor.svg" alt="" className="img-supervisor" />
                </div>

            </div>
        </>
    )
}

export default Targets