import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GUIDsAndMeta = () => {
  const markdownFilePath = 'Engines/Unity/Tools/AssetPipeline/GUIDsAndMeta';

  return (
    <>
      <PageLayout>
        <PageTitle title="GUIDs & Meta" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GUIDsAndMeta;
