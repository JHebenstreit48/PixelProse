import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Templates = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ModernCFeatures/Templates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Templates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Templates;
