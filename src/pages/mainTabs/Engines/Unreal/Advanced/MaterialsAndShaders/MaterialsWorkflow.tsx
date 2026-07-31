import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
