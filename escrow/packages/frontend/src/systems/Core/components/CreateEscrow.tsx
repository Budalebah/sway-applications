//import { ESCROW_PATH } from "@/config";
import { DECIMAL_PRECISION } from "@/config";
import { ArbiterInput, AssetInput, IdentityInput } from "@/types/contracts/EscrowAbi";
import { Button, Stack, Input, Card, Flex } from "@fuel-ui/react";
import toast from "react-hot-toast";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useAtomValue } from "jotai";
import { useWallet } from "../context/AppContext";
import { useContract } from "../hooks/useContract";

import { walletIndexAtom } from "../jotai";
import { ArbiterInputContainer } from "./ArbiterInputContainer"
import { AssetInputContainer } from "./AssetInputContainer";
import { parseInputValueBigInt } from "../utils/math";
import { useCreateEscrow } from "../hooks/useCreateEscrow";

export const CreateEscrow = () => {
    const queryClient = useQueryClient();
    const walletIdx = useAtomValue(walletIndexAtom);
    const wallet = useWallet();
    const contract = useContract();
    const [arbiter, setArbiter] = useState("");
    const [arbiterAsset, setArbiterAsset] = useState("");
    const [arbiterFee, setArbiterFee] = useState("");
    const [buyer, setBuyer] = useState("");
    const [deadline, setDeadline] = useState("");
    const [assets, setAssets] = useState([{
        assetId: "",
        assetAmount: ""
    }]);
    const [showCreateEscrow, setShowCreateEscrow] = useState(false);
    const createEscrowMutation = useCreateEscrow({
        arbiterFee,
        arbiterAddress: arbiter,
        arbiterAsset,
        buyerAddress: buyer,
        deadline,
        assets,
        setArbiterFee,
        setArbiterAddress: setArbiter,
        setArbiterAsset,
        setBuyerAddress: setBuyer,
        setDeadline,
        setAssets,
    });

    const handleArbiterAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newArbiter = event.target.value;
        setArbiter(newArbiter);
    }

    const handleArbiterAssetChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newAssetId = event.target.value;
        setArbiterAsset(newAssetId);
    }

    const handleArbiterFeeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newFee = event.target.value;
        setArbiterFee(newFee);
    }

    const handleBuyerAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newBuyer = event.target.value;
        setBuyer(newBuyer);
    }

    const handleDeadlineChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newDeadline = event.target.value;
        setDeadline(newDeadline);
    }

    const handleAssetIdChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
        const newAssets = [...assets];
        newAssets[assetIdx].assetId = event.target.value;
        setAssets(newAssets);
    }

    const handleAssetAmountChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
        const newAssets = [...assets];
        newAssets[assetIdx].assetAmount = event.target.value;
        setAssets(newAssets);
    }

    const handleAddAsset = () => {
        setAssets([...assets, { assetId: "", assetAmount: "" }]);
    }

    const handleRemoveAsset = (assetIdx: number) => {
        setAssets(assets.filter((asset, i) => {
            return i !== assetIdx;
        }));
    }

    const handleShowCreateEscrow = () => {
        setShowCreateEscrow(!showCreateEscrow);
    }

    const shouldDisableCreateButton = createEscrowMutation.isLoading;

    return (
        <Flex css={{ flex: "1", justifyContent: "center" }}>
            <Flex direction="column">
                <Button leftIcon={showCreateEscrow ? "Minus" : "Plus"} css={{ margin: "10px", width: "475px" }} onPress={() => handleShowCreateEscrow()}>
                    Create Escrow
                </Button>
                {showCreateEscrow && <Card css={{ margin: "10px", bg: "$gray7" }}>
                    <Stack css={{ width: "475px", margin: "10px", alignItems: "center" }}>
                        <ArbiterInputContainer
                            onArbiterAddressChange={handleArbiterAddressChange}
                            onAssetIdChange={handleArbiterAssetChange}
                            onFeeChange={handleArbiterFeeChange}
                            arbiterAddress={arbiter}
                            asset={arbiterAsset}
                            feeAmount={arbiterFee}
                        />
                        <Input css={{ alignSelf: "stretch" }} >
                            <Input.Field
                                id={`buyerAddress`}
                                name={`buyerAddress`}
                                placeholder={`Buyer Address`}
                                value={buyer}
                                type="text"
                                onChange={(e) => handleBuyerAddressChange(e)}
                                css={{ font: "$sans" }}
                            />
                        </Input>
                        <Input css={{ alignSelf: "stretch" }} >
                            <Input.Number
                                placeholder="Escrow Deadline (block number)"
                                inputMode="numeric"
                                value={deadline}
                                onChange={(e) => handleDeadlineChange(e)}
                            />
                        </Input>
                        <AssetInputContainer
                            onAddAsset={handleAddAsset}
                            onRemoveAsset={handleRemoveAsset}
                            onAssetAmountChange={handleAssetAmountChange}
                            onAssetIdChange={handleAssetIdChange}
                            assets={assets}
                        />
                        <Button
                            isDisabled={shouldDisableCreateButton}
                            isLoading={createEscrowMutation.isLoading}
                            onPress={() => { createEscrowMutation.mutate(); }}
                            leftIcon="PlusIcon"
                            css={{ font: "$sans", alignSelf: "stretch" }}
                        >
                            Create Escrow
                        </Button>
                    </Stack>
                </Card>
                }
            </Flex>
        </Flex>
    );
}