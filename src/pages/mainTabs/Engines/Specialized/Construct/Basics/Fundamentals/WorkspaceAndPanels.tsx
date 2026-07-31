import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
