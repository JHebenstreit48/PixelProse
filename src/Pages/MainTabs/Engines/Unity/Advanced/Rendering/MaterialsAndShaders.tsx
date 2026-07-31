import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MaterialsAndShaders = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Rendering/MaterialsAndShaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Materials & Shaders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterialsAndShaders;
