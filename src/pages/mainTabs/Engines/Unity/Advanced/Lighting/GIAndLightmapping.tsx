import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
