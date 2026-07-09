import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShortcutsAndPanels = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Tools/EditorAndWorkflow/ShortcutsAndPanels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shortcuts & Panels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShortcutsAndPanels;
