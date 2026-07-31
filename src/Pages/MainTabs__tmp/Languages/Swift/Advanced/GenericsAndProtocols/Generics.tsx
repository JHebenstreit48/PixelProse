import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Generics = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/GenericsAndProtocols/Generics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Generics;
