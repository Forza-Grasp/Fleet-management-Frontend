import { SERVER_URL } from "../../../settings.js";
import { checkAllRoles, checkTokenGet, checkRoleAdmin } from "../../js/loginSettings.js";
let URL = SERVER_URL + "/campaign";
let router;


export async function initAllCampaigns(navigo) {
    checkAllRoles();
    router = navigo;
    getAllCompaigns();
}



async function getAllCompaigns() {
    const allCampaigns = await fetch(URL, await checkTokenGet()).then(r => r.json());

    console.log(allCampaigns)

    for (let i = 0; i < allCampaigns.length; i++) {
        for (let y = 0; y < allCampaigns[i].campaignBid.length; y++) {
            let activeCampaigns = 0;
            let campaignsWithBids = 0;
            let campaignsWithAcceptedBids = 0;
            console.log(allCampaigns[i])
            if (allCampaigns[i].campaignStatus === "ACTIVE") {
                activeCampaigns++
            }
            if (allCampaigns[i].campaignBid[y].campaignBidStatus === "CURRENT_OFFER") {
                campaignsWithBids++
            }
            if (allCampaigns[i].campaignBid[y].campaignBidStatus === "ACCEPTED_OFFER") {
                campaignsWithAcceptedBids++
            }
            console.log(activeCampaigns)
            console.log(campaignsWithBids)
            console.log(campaignsWithAcceptedBids)
        }
    }
}

