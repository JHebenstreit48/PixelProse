import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InlineAndValueClasses = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Performance/InlineAndValueClasses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inline & Value Classes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineAndValueClasses;
