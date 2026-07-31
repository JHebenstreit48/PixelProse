import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeSafeBuilders = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/DSLAndBuilders/TypeSafeBuilders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type-Safe Builders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeSafeBuilders;
