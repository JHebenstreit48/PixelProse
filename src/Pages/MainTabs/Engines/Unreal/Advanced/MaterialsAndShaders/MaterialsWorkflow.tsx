import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MaterialsWorkflow = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/MaterialsAndShaders/MaterialsWorkflow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Materials Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterialsWorkflow;
