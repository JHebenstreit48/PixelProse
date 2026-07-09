import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
