import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
