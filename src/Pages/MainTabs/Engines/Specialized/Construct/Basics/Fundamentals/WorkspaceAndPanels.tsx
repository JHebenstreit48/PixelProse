import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WorkspaceAndPanels = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/Fundamentals/WorkspaceAndPanels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Workspace & Panels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkspaceAndPanels;
