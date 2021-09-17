/* eslint-disable */
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';

import LoadingBar from 'src/Components/LoadingBar/LoadingBar.component';
import './Checkout.override.style.scss'

class Checkout extends SourceCheckout {

    renderLoadingBar() {
        let keys = Object.keys(this.stepMap)
        let index = keys.indexOf(this.props.checkoutStep)
        let loadingParts = []
        loadingParts.push(<LoadingBar isFirst={true} isDone={true} />)
        for (let i = 0; i < keys.length - 1; i++) {
            console.log("iteration", i, "index", index)
            loadingParts.push(
                <LoadingBar stepMap={this.stepMap} step={keys[i]} isDone={index > i} isNext={index === i} />
            )
        }
        return loadingParts;
    }

    render() {
        const { checkoutStep } = this.props;

        return (
            <main block="Checkout">
                <div className="Loading-Bar-Container">
                    {this.renderLoadingBar()}
                </div>

                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >

                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }

}

export default Checkout;