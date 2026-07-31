import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InterfacesAndGenerics = () => {
  const markdownFilePath = 'Languages/Java/Basics/OOP/InterfacesAndGenerics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interfaces & Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndGenerics;
