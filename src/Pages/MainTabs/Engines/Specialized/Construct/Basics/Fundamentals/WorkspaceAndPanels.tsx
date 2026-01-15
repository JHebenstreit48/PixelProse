import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkspaceAndPanels = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/Fundamentals/WorkspaceAndPanels';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Workspace & Panels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkspaceAndPanels;
