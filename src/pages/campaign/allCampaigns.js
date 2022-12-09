import { SERVER_URL } from "../../../settings.js";
import { checkAllRoles, checkTokenGet, checkRoleAdmin } from "../../js/loginSettings.js";
let URL = SERVER_URL + "/campaign";
let router;


export async function initAllCampaigns(navigo) {
    checkAllRoles();
    router = navigo;
    getAllKeyNumbers();
}



async function getAllKeyNumbers() {
    const allCampaigns = await fetch(URL, await checkTokenGet()).then(r => r.json());

    console.log(allCampaigns)
    let activeCampaigns = 0;
    let campaignsWithBids = 0;
    let campaignsWithAcceptedBids = 0;

    for (let i = 0; i < allCampaigns.length; i++) {
        if (allCampaigns[i].campaignStatus === "ACTIVE") {
            console.log(allCampaigns[i])
            activeCampaigns++
        }
    }
    for (let i = 0; i < allCampaigns.length; i++) {
        for (let y = 0; y < allCampaigns[i].campaignBid.length; y++) {
            if (allCampaigns[i].campaignBid[y].campaignBidStatus === "CURRENT_OFFER") {
                campaignsWithBids++
                console.log(allCampaigns[i].campaignBid[y])
            }
        }
    }

    for (let i = 0; i < allCampaigns.length; i++) {
        for (let y = 0; y < allCampaigns[i].campaignBid.length; y++) {

            if (allCampaigns[i].campaignBid[y].campaignBidStatus === "ACCEPTED_OFFER") {
                campaignsWithAcceptedBids++
            }
        }
    }

    document.getElementById("activeCampaigns").innerHTML = "Active Campaigns: " + activeCampaigns.toFixed(0);
    document.getElementById("campaignsWithBids").innerHTML = "Campaigns With bids: " + campaignsWithBids.toFixed(0);
    document.getElementById("campaignsWithAcceptedBids").innerHTML = "Campaigns with accepted bids: " + campaignsWithAcceptedBids.toFixed(0);



}

