import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const GIAndLightmapping = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Lighting/GIAndLightmapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="GI & Lightmapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GIAndLightmapping;
