import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
