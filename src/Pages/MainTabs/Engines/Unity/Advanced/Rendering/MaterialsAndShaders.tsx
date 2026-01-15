import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MaterialsAndShaders = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Rendering/MaterialsAndShaders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Materials & Shaders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterialsAndShaders;
