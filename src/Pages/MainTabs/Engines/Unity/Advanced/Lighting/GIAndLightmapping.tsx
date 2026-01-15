import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GIAndLightmapping = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Lighting/GIAndLightmapping';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GI & Lightmapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GIAndLightmapping;
