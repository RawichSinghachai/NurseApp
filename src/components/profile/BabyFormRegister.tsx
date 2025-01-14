"use client";
import React, { startTransition, useActionState, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonMotion from ".././ButtonMotion";
import { useRouter, useSearchParams } from "next/navigation";
import { useParentStore } from "@/stores/store";
import { grey, pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { createAndUpdateBabyAction } from "@/action/action";

type Props = {
  edit?: boolean;
  indexBaby?: number;
};

const BabyFormRegister = ({ edit, indexBaby }: Props) => {
  const { baby } = useParentStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const _id = searchParams.get("_id");

  const [babyGender, setBabyGender] = useState(
    edit && indexBaby !== undefined ? baby?.[indexBaby]?.babyGender || "" : ""
  );

  const initialState = {
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    createAndUpdateBabyAction, // Choose the appropriate action
    initialState
  );

  if(state.message){
    router.push("/profile")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);

 
      const payload = { formData, _id };
      startTransition(() => {
        formAction(payload);
      });
   
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Information</Typography>
        <TextField
          label="BabyName"
          variant="outlined"
          name="babyName"
          defaultValue={
            edit && indexBaby !== undefined ? baby?.[indexBaby]?.babyName : ""
          }
        />
        <TextField
          label="BabyAge"
          variant="outlined"
          name="babyAge"
          defaultValue={
            edit && indexBaby !== undefined ? baby?.[indexBaby]?.babyAge : ""
          }
        />
        <FormControl fullWidth>
          <InputLabel id="baby-select-label">BabyGender</InputLabel>
          <Select
            labelId="baby-select-label"
            label="BabyGender"
            value={babyGender}
            onChange={(e) => setBabyGender(e.target.value)}
            name="babyGender"
            // onChange={handleChange}
          >
            <MenuItem value={"Boy"}>Boy</MenuItem>
            <MenuItem value={"Girl"}>Girl</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonMotion>
            <Button
              variant="contained"
              sx={{
                color: grey[900],
                bgcolor: grey[300],
                ":hover": { bgcolor: grey[400] },
              }}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </ButtonMotion>
          <ButtonMotion>
            <Button
              variant="contained"
              disabled={isPending}
              type="submit"
              sx={{
                bgcolor: pink["A200"],
                ":hover": { bgcolor: pink["A400"] },
              }}
            >
              {isPending ? "Loading" : "Submit"}
            </Button>
          </ButtonMotion>
        </Stack>
      </Stack>
    </form>
  );
};

export default BabyFormRegister;
