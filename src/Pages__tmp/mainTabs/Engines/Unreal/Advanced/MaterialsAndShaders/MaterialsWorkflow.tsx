import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MaterialsWorkflow = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/MaterialsAndShaders/MaterialsWorkflow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Materials Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterialsWorkflow;
