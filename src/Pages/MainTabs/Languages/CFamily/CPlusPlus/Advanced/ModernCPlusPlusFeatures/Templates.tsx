import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
