import { logError } from "@/lib/loging";
import { Api } from "../../lib/api";
import {
  ItemsInfoBox,
  ItemsImageBox,
  ItemsQuote,
  ItemsIframe,
  ItemsAudioPlayer,
  ItemsPostEditorNodes,
} from "@/lib/api/data-contracts";

export const loadTipTapContent = async (docContent) => {
  //   var results: number[] = await Promise.all(arr.map(async (item): Promise<number> => {
  //     await callAsynchronousOperation(item);
  //     return item + 1;
  // }));
  const mapData = async (contentNode) => {
    if (contentNode.type === "relation-block") {
      const ApiMapper = {
        page_receive_nodes: Api.readSingleItemsPageReceiveNodes,
        post_editor_nodes: Api.readSingleItemsPostEditorNodes,
        page_history_nodes: Api.readSingleItemsPageHistoryNodes,
        events_editor_nodes: Api.readSingleItemsEventsEditorNodes,
        page_join_nodes: Api.readSingleItemsPageJoinNodes,
        page_internship_nodes: Api.readSingleItemsPageInternshipNodes,
        page_classes_nodes: Api.readSingleItemsPageClassesNodes,
      };
      if (ApiMapper[contentNode.attrs.junction]) {
        let node = await getNodes(
          contentNode.attrs.id,
          ApiMapper[contentNode.attrs.junction]
        );

        if (contentNode.attrs.collection === "audio_player") {
          let data = await getAudioPlayerFiles(node.item);
          contentNode.data = data;
          return contentNode;
        }

        if (contentNode.attrs.collection === "quote") {
          let data = await getQuote(node.item);
          contentNode.data = data;
          return contentNode;
        }
        if (contentNode.attrs.collection === "iframe") {
          let data = await getIframe(node.item);
          contentNode.data = data;
          return contentNode;
        }
        if (contentNode.attrs.collection === "info_box") {
          let data = await getInfoBox(node.item);
          contentNode.data = data;
          return contentNode;
        }
        if (contentNode.attrs.collection === "image_box") {
          let data = await getImageBox(node.item);
          contentNode.data = data;
          return contentNode;
        }
      } else {
        console.error(
          "Junction Node Mapping is missing new Apifunction for: ",
          contentNode.attrs.junction
        );
      }
    } else {
      return contentNode;
    }
  };
  const unresolvedPromises = docContent.content.map(mapData);
  // console.log("unresolvedPromises", unresolvedPromises);
  const results = await Promise.all(unresolvedPromises);
  console.log("results", results);

  return {
    type: "doc",
    content: results,
  };
};

async function getInfoBox(id) {
  try {
    const itemResponse = await Api.readSingleItemsInfoBox(
      {
        id: id,
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsInfoBox = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getImageBox(id) {
  try {
    const itemResponse = await Api.readSingleItemsImageBox(
      {
        id: id,
        fields: ["*", "image.*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsImageBox = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getQuote(id) {
  try {
    const itemResponse = await Api.readSingleItemsQuote(
      {
        id: id,
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsQuote = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getIframe(id) {
  try {
    const itemResponse = await Api.readSingleItemsIframe(
      {
        id: id,
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsIframe = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getAudioPlayerFiles(id) {
  try {
    const itemResponse = await Api.readSingleItemsAudioPlayer(
      {
        id: id,
        fields: ["*", "files.directus_files_id.*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsAudioPlayer = itemResponse.data.data;

    return item;
  } catch (error) {
    logError(error);
  }
}

async function getNodes(id, readNodes) {
  try {
    const itemResponse = await readNodes(
      {
        id: id,
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsPostEditorNodes = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}
